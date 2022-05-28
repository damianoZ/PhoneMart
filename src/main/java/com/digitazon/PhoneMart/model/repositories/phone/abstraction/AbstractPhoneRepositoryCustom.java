package com.digitazon.PhoneMart.model.repositories.phone.abstraction;

import com.digitazon.PhoneMart.model.entities.Phone;

public interface AbstractPhoneRepositoryCustom {
    Iterable<Phone> findByBrand(String like);
}
