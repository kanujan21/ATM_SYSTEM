package com.ATM.DAO;

import com.ATM.dbCconnection.Db_Connection;
import com.ATM.model.Transaction;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class DepositDAO {
    public boolean addDeposit(Transaction deposit) throws SQLException{
        double balance = 0;
        String sql1 = "select balance from account where cartNo=?";
        try (Connection conn = Db_Connection.getConnection();
        PreparedStatement ps = conn.prepareStatement(sql1)){
            ps.setInt(1,deposit.getCartNo());
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                balance = rs.getDouble("balance");
            }
            balance += deposit.getAmount();
        }

        String sql2 = "update account set balance=? where cartNo=?";
        try (Connection conn = Db_Connection.getConnection();
        PreparedStatement ps = conn.prepareStatement(sql2)){
            ps.setDouble(1,balance);
            ps.setInt(2,deposit.getCartNo());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        String sql3 = "insert into transaction (cartNo,amount,Rs5000,Rs1000,Rs500,Rs100,action) values (?,?,?,?,?,?,?)";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql3)){
            ps.setInt(1,deposit.getCartNo());
            ps.setInt(2,deposit.getAmount());
            ps.setInt(3,deposit.getRs5000());
            ps.setInt(4,deposit.getRs1000());
            ps.setInt(5,deposit.getRs500());
            ps.setInt(6,deposit.getRs100());
            ps.setString(7,"Deposit");

            return ps.executeUpdate()>0;

        }
    }

    public List<Transaction> getDeposit(){
        List<Transaction> depositList = new ArrayList<>();
        String sql = "select * from transaction where action= 'Deposit'";
        try (Connection conn = Db_Connection.getConnection();
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery()){
            while (rs.next()){
                depositList.add(new Transaction(
                        rs.getInt("id"),
                        rs.getInt("cartNo"),
                        rs.getString("date"),
                        rs.getInt("amount"),
                        rs.getInt("Rs5000"),
                        rs.getInt("Rs1000"),
                        rs.getInt("Rs500"),
                        rs.getInt("Rs100"),
                        rs.getString("action")));
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return depositList;
    }
}
