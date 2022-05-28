package com.digitazon.PhoneMart.model.entities;

import javax.persistence.*;
@Entity
@Table(name = "phones")
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "brand")
    private String brand;
    @Column(name = "system")
    private String system;
    @Column(name = "gb")
    private String gb;
    @Column(name = "model")
    private String model;
    @Column(name = "inch")
    private String inch;
    @Column(name = "dimensions")
    private String dimensions;
    @Column(name = "color")
    private String color;
    @Column(name = "weight")
    private String weight;
    @Column(name = "description")
    private String description;
    @Column(name = "quantity")
    private String quantity;
    @Column(name = "aviable")
    private boolean aviable;
    @Column(name = "price")
    private String price;
    @Column(name = "img")
    private String img;

    public Phone() {
        }

    public Phone(int id, String brand, String system, String gb, String model, String inch, String dimensions,
                 String color, String weight, String description, String quantity, boolean aviable, String price, String img) {
        this.id = id;
        this.brand = brand;
        this.system = system;
        this.gb = gb;
        this.model = model;
        this.inch = inch;
        this.dimensions = dimensions;
        this.color = color;
        this.weight = weight;
        this.description = description;
        this.quantity = quantity;
        this.aviable = aviable;
        this.price = price;
        this.img = img;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getGb() {
        return gb;
    }

    public void setGb(String gb) {
        this.gb = gb;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getInch() {
        return inch;
    }

    public void setInch(String inch) {
        this.inch = inch;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public boolean isAviable() {
        return aviable;
    }

    public void setAviable(boolean aviable) {
        this.aviable = aviable;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}

