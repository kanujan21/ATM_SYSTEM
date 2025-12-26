package com.ATM.DAO;

import com.ATM.dbCconnection.Db_Connection;
import com.ATM.model.Account;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountDAO {
    public boolean addAccount(Account account) throws SQLException{
        String sql = "insert into account (cartNo,accountNo,name,pin,balance) values (?,?,?,?,?)";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)){
            ps.setInt(1,account.getCartNo());
            ps.setInt(2,account.getAccountNo());
            ps.setString(3,account.getName());
            ps.setInt(4,account.getPin());
            ps.setInt(5,account.getBalance());
            return ps.executeUpdate()>0;

        }
    }

    public double getBalance(int cardNo){
        String sql = "select * from account where cartNo=?";
        double balance =0.00;
        try(Connection conn = Db_Connection.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);) {
            ps.setInt(1, cardNo);
            try (ResultSet rs = ps.executeQuery()){
                if(rs.next()){
                    balance = rs.getDouble("balance");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return balance;
    }
}
