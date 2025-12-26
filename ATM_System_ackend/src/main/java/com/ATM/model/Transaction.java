package com.ATM.model;

public class Transaction {
    private int id;
    private int cartNo;
    private String date;
    private int amount;
    private int Rs5000;
    private int Rs1000;
    private int Rs500;
    private int Rs100;
    private String action;

    public Transaction() {
    }

    public Transaction(int id, int cartNo, String date, int amount, int rs5000, int rs1000, int rs500, int rs100, String action) {
        this.id = id;
        this.cartNo = cartNo;
        this.date = date;
        this.amount = amount;
        Rs5000 = rs5000;
        Rs1000 = rs1000;
        Rs500 = rs500;
        Rs100 = rs100;
        this.action = action;
    }
    public Transaction( int rs5000, int rs1000, int rs500, int rs100) {
        this.Rs5000 = rs5000;
        this.Rs1000 = rs1000;
        this.Rs500 = rs500;
        this.Rs100 = rs100;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCartNo() {
        return cartNo;
    }

    public void setCartNo(int cartNo) {
        this.cartNo = cartNo;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getRs5000() {
        return Rs5000;
    }

    public void setRs5000(int rs5000) {
        Rs5000 = rs5000;
    }

    public int getRs1000() {
        return Rs1000;
    }

    public void setRs1000(int rs1000) {
        Rs1000 = rs1000;
    }

    public int getRs500() {
        return Rs500;
    }

    public void setRs500(int rs500) {
        Rs500 = rs500;
    }

    public int getRs100() {
        return Rs100;
    }

    public void setRs100(int rs100) {
        Rs100 = rs100;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}