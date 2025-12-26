package com.ATM.DAO;

import com.ATM.dbCconnection.Db_Connection;
import com.ATM.model.Transaction;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class WithdrawalDAO {
    public boolean addWithdrawal(Transaction withdraw) throws SQLException{

        int amount = withdraw.getAmount();
        if (amount >= 5000){
            withdraw.setRs5000(amount/5000);
            System.out.println("4 : "+ amount/5000);
            amount=amount%5000;
            System.out.println("1 : "+ amount);
        }

        if (amount >= 1000) {
            withdraw.setRs1000(amount/1000);
            System.out.println("4 : "+ amount/1000);
            amount=amount%1000;
            System.out.println("2 : "+ amount);
        }
        if (amount >= 500) {
            withdraw.setRs500(amount/500);
            System.out.println("4 : "+ amount/500);
            amount=amount%500;
            System.out.println("3 : "+ amount);
        }
        if (amount >= 100) {
            withdraw.setRs100(amount/100);
            System.out.println("4 : "+ amount/100);
            amount=amount%100;
            System.out.println("4 : "+ amount);
        }
        if(amount>0){
            throw new SQLException("Amount should be in multiple of 100 : ");
        }

        double balance = 0.00;

        String sql1 = "select balance from account where cartNo=?";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql1)){
            ps.setInt(1,withdraw.getCartNo());
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                balance = rs.getDouble("balance");
            } else {
            throw new SQLException("Account not found for cartNo: " + withdraw.getCartNo());
            }
        }
        balance -= withdraw.getAmount();
        if (balance < withdraw.getAmount()) {
            throw new SQLException("Insufficient balance. Current: " + balance);
        }
        String sql2 = "update account set balance=? where cartNo=?";
        try (Connection conn = Db_Connection.getConnection();
        PreparedStatement ps = conn.prepareStatement(sql2)){
            ps.setDouble(1,balance);
            ps.setInt(2,withdraw.getCartNo());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        String sql3 = "insert into transaction (cartNo,amount,Rs5000,Rs1000,Rs500,Rs100,action) values (?,?,?,?,?,?,?)";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql3)){
            ps.setInt(1,withdraw.getCartNo());
            ps.setInt(2,withdraw.getAmount());
            ps.setInt(3,withdraw.getRs5000());
            ps.setInt(4,withdraw.getRs1000());
            ps.setInt(5,withdraw.getRs500());
            ps.setInt(6,withdraw.getRs100());
            ps.setString(7,"Withdrawal");

            return ps.executeUpdate()>0;

        }

    }

    public Transaction getWithdrawal(int cartNo){
       Transaction withdrawList = new Transaction();
        String sql = "SELECT Rs5000,Rs1000,Rs500,Rs100 FROM transaction WHERE cartNo = ? AND action = 'Withdrawal' ORDER BY id DESC LIMIT 1";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)){
            ps.setInt(1,cartNo);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                   withdrawList=new Transaction(
                           rs.getInt("Rs5000"),
                           rs.getInt("Rs1000"),
                           rs.getInt("Rs500"),
                           rs.getInt("Rs100")
                   );
                }
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return withdrawList;
    }
}

