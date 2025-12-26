package com.ATM.services;

import com.ATM.DAO.TransactionDAO;
import com.ATM.model.Transaction;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/Transaction")
public class TransactionServlet extends HttpServlet {
    private final Gson gson = new Gson();
    private TransactionDAO transactionDAO = new TransactionDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        String cartNo = req.getParameter("cartNo");
        int id = Integer.parseInt(cartNo);
        List<Transaction> transactionList = transactionDAO.getTransaction(id);
        if (transactionList.isEmpty()){
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        else {
            resp.setStatus(HttpServletResponse.SC_OK);
        }
        resp.getWriter().write(gson.toJson(transactionList));
    }
}
