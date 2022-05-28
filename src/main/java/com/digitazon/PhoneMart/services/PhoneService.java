package com.digitazon.PhoneMart.services;

import com.digitazon.PhoneMart.model.entities.Phone;
import com.digitazon.PhoneMart.model.entities.User;
import com.digitazon.PhoneMart.model.repositories.phone.abstraction.AbstractPhoneRepositoryCustom;
import com.digitazon.PhoneMart.model.repositories.phone.abstraction.PhoneRepository;
import com.digitazon.PhoneMart.model.repositories.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PhoneService implements AbstractPhoneService {

    @Autowired
    private PhoneRepository phoneRepository;
    @Autowired
    private AbstractPhoneRepositoryCustom abstractPhoneRepositoryCustom;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Iterable<Phone> findAllOrderById() {
        return phoneRepository.findAllByOrderById();
    }

    @Override
    public Iterable<Phone> findByBrand(String like) {
        return abstractPhoneRepositoryCustom.findByBrand(like);
    }

    @Override
    public boolean insertUser(User user) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        User user1 = new User(0,user.getUserName(),encodedPassword);
        userRepository.save(user1);
        return true;
    }
}
