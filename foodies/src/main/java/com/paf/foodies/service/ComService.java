package com.paf.foodies.service;

import com.paf.foodies.dto.ComDTO;
import com.paf.foodies.entity.Comment;
import com.paf.foodies.repo.ComRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ComService {
    @Autowired
    private ComRepo comRepo;
@Autowired
private ModelMapper modelMapper;
    public ComDTO saveComment(ComDTO comDTO){
        comRepo.save(modelMapper.map(comDTO, Comment.class));
        return comDTO;

    }

    public List<ComDTO> getAllComments(){
        List<Comment>commentList=comRepo.findAll();
        return modelMapper.map(commentList,new TypeToken<List<ComDTO>>(){}.getType());
    }

    public ComDTO updateComment(ComDTO comDTO){
        comRepo.save(modelMapper.map(comDTO,Comment.class));
        return comDTO;

    }

    public boolean deleteComment(ComDTO comDTO){
        comRepo.delete(modelMapper.map(comDTO, Comment.class));
        return true;
    }

}
