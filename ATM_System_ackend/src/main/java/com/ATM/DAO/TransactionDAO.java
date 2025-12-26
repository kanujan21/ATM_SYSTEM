package com.ATM.DAO;

import com.ATM.dbCconnection.Db_Connection;
import com.ATM.model.Transaction;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class TransactionDAO {

    public List<Transaction> getTransaction(int cartNo){
        List<Transaction> transactionList = new ArrayList<>();
        String sql = "select * from transaction where cartNo=? ORDER BY date DESC";
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)){
             ps.setInt(1,cartNo);
             try (ResultSet rs = ps.executeQuery()){
                while (rs.next()) {
                    transactionList.add(new Transaction(
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
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return transactionList;
    }
}
