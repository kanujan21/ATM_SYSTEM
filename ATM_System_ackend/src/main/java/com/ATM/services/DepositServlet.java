package com.ATM.services;

import com.ATM.DAO.DepositDAO;
import com.ATM.model.Transaction;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/Deposit")
public class DepositServlet extends HttpServlet {
    private final Gson gson = new Gson();
    private DepositDAO depositDAO = new DepositDAO();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");

        try {
            Transaction deposit = gson.fromJson(req.getReader(),Transaction.class);
            boolean added = depositDAO.addDeposit(deposit);

            if (added){
                resp.getWriter().write("{\"message\":\"Successfully Deposit\"}");
                resp.setStatus(HttpServletResponse.SC_OK);
            }
            else {
                resp.getWriter().write("{\"message\":\"Failed deposit\"}");
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        List<Transaction> depositList = depositDAO.getDeposit();
        if (depositList.isEmpty()){
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        else {
            resp.setStatus(HttpServletResponse.SC_OK);
        }
        resp.getWriter().write(gson.toJson(depositList));
    }
}
