package com.digitazon.PhoneMart.model.controllers;

import com.digitazon.PhoneMart.model.entities.Phone;
import com.digitazon.PhoneMart.services.AbstractPhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/phones")
@CrossOrigin(origins="*")
public class PhoneController {

    @Autowired
    private AbstractPhoneService abstractPhoneService;

    @GetMapping("/public")
    public ResponseEntity<Iterable<Phone>> getByNameLike(@RequestParam(required = false) String like) {
        if (like == null) {
            var phones = abstractPhoneService.findAllOrderById();
            return ResponseEntity.ok(phones);
        }
        var phones = abstractPhoneService.findByBrand(like.toLowerCase());
        return ResponseEntity.ok(phones);
    }
}

