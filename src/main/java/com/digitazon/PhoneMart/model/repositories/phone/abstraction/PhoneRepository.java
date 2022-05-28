package com.digitazon.PhoneMart.model.repositories.phone.abstraction;

import com.digitazon.PhoneMart.model.entities.Phone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneRepository extends JpaRepository<Phone, Integer>{

    Iterable<Phone> findAllByOrderById();
}
