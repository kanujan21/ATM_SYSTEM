package com.ATM.services;

import com.ATM.DAO.AccountDAO;
import com.ATM.model.Account;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/Account")
public class AccountServlet extends HttpServlet {
    private final Gson gson = new Gson();
    private AccountDAO accountDAO = new AccountDAO();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        try {
            Account account = gson.fromJson(req.getReader(),Account.class);
            boolean added = accountDAO.addAccount(account);

            if (added){
                resp.setStatus(HttpServletResponse.SC_OK);
                resp.getWriter().write("{\"message\":\"Add Account SuccessFull\"}");
            }
            else {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("\"message\":\"failed to add Account\"");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        String  cartNo = req.getParameter("cartNo");
        int id = Integer.parseInt(cartNo);
        double data = accountDAO.getBalance(id);
        resp.getWriter().write(gson.toJson(data));
    }
}
