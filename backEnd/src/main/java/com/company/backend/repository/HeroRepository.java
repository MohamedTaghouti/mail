package com.company.backend.repository;

import com.company.backend.model.Hero;
import com.company.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mohamed on 11/07/2017.
 */
@RepositoryRestResource(exported = false)
public interface HeroRepository extends JpaRepository<Hero, Long> {
    Hero findByName(String username);
}