package com.digitazon.PhoneMart.model.repositories.phone.implementations;

import com.digitazon.PhoneMart.model.entities.Phone;
import com.digitazon.PhoneMart.model.repositories.phone.abstraction.AbstractPhoneRepositoryCustom;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Repository
@Transactional(readOnly = true)

public class PhoneRepositoryImpl implements AbstractPhoneRepositoryCustom {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public Iterable<Phone> findByBrand(String like) {
        Query query = entityManager.createNativeQuery("SELECT p.* FROM phones p WHERE p.brand ILIKE ? ", Phone.class);
        query.setParameter(1, "%" + like + "%");
        return query.getResultList();
    }

}
