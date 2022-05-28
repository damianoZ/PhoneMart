package com.digitazon.PhoneMart.model.repositories.user;

import com.digitazon.PhoneMart.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUserName(String like);
}
