package com.company.backend.repository;

import com.company.backend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mohamed on 11/07/2017.
 */
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("from User u where lower(u.name) like CONCAT('%', lower(:name), '%')")
    public Iterable<User> findByName(@Param("name") String name);

}
