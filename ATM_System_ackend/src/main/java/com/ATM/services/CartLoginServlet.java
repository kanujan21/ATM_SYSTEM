package com.ATM.services;

import com.ATM.DAO.LoginDAO;
import com.ATM.model.Account;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/LoginCart")
public class CartLoginServlet extends HttpServlet {
    private final Gson gson = new Gson();
    private final LoginDAO loginDAO = new LoginDAO();
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");

        try {
            Account account = gson.fromJson(req.getReader(),Account.class);
            int cartNo = account.getCartNo();
            int pin = account.getPin();
            boolean isValid = loginDAO.validLoginCart(cartNo,pin);
            if (isValid){
                resp.setStatus(HttpServletResponse.SC_OK);
                resp.getWriter().write("{\"message\":\"Login SuccessFull\"}");
            }
            else {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                resp.getWriter().write("{\"message\":\"Invalid Cart number or Pin \"}");
            }
            resp.getWriter().write(gson.toJson(isValid));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
