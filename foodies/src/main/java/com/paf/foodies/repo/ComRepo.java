package com.paf.foodies.repo;

import com.paf.foodies.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComRepo extends JpaRepository<Comment,Integer> {


}
