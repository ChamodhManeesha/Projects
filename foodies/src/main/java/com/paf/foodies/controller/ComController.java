package com.paf.foodies.controller;

import com.paf.foodies.dto.ComDTO;
import com.paf.foodies.service.ComService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/vi/Com")
@CrossOrigin

public class ComController {
    @Autowired
    private ComService comService;

    @GetMapping("/getComs")
    public List<ComDTO> getCom(){
        return comService.getAllComments();
    }

    @PostMapping("/saveCom")
    public ComDTO saveCom(@RequestBody ComDTO comDTO){
        return comService.saveComment(comDTO);
    }

    @PutMapping ("/updateCom")
    public ComDTO updateCom(@RequestBody ComDTO comDTO){
        return comService.updateComment(comDTO);
    }

    @DeleteMapping ("/deleteCom")
    public boolean deleteCom(@RequestBody ComDTO comDTO){
        return comService.deleteComment(comDTO);
    }


}
