package com.ATM.model;

public class Account {
    private int cartNo;
    private int accountNo;
    private String name;
    private int pin;
    private int balance;

    public Account() {
    }

    public Account(int cartNo, int accountNo, String name, int pin, int balance) {
        this.cartNo = cartNo;
        this.accountNo = accountNo;
        this.name = name;
        this.pin = pin;
        this.balance = balance;
    }

    public int getCartNo() {
        return cartNo;
    }

    public void setCartNo(int cartNo) {
        this.cartNo = cartNo;
    }

    public int getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(int accountNo) {
        this.accountNo = accountNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPin() {
        return pin;
    }

    public void setPin(int pin) {
        this.pin = pin;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
