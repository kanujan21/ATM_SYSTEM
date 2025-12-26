package com.ATM.services;

import com.ATM.DAO.WithdrawalDAO;
import com.ATM.model.Transaction;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/Withdrawal")
public class WithdrawalServlet extends HttpServlet {
    private final Gson gson = new Gson();
    private WithdrawalDAO withdrawalDAO = new WithdrawalDAO();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        try {
            Transaction withdraw = gson.fromJson(req.getReader(),Transaction.class);
            boolean added = withdrawalDAO.addWithdrawal(withdraw);

            if (added){
                resp.setStatus(HttpServletResponse.SC_OK);
                resp.getWriter().write("{\"message\":\"transaction\"successful\"}");
            } else {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\":\"transaction\"failed\"}");

            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        String cartNo = req.getParameter("cartNo");
        int id = Integer.parseInt(cartNo);
        Transaction withdrawList = withdrawalDAO.getWithdrawal(id);
        if (withdrawList == null){
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        else {
            resp.setStatus(HttpServletResponse.SC_OK);
        }
        resp.getWriter().write(gson.toJson(withdrawList));
    }

}
