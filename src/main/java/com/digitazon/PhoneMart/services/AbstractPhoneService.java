package com.digitazon.PhoneMart.services;

import com.digitazon.PhoneMart.model.entities.Phone;
import com.digitazon.PhoneMart.model.entities.User;

public interface AbstractPhoneService{
    Iterable<Phone> findAllOrderById();
    Iterable<Phone> findByBrand(String like);
    boolean insertUser(User user);
}
