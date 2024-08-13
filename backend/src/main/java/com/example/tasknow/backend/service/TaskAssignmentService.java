package com.example.tasknow.backend.service;

import com.example.tasknow.backend.model.TaskAssignment;
import com.example.tasknow.backend.repository.TaskAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskAssignmentService {

    @Autowired
    private TaskAssignmentRepository taskAssignmentRepository;

    public List<TaskAssignment> getAllTaskAssignments() {
        return taskAssignmentRepository.findAll();
    }

    public Optional<TaskAssignment> getTaskAssignmentById(Long id) {
        return taskAssignmentRepository.findById(id);
    }

    public TaskAssignment saveTaskAssignment(TaskAssignment taskAssignment) {
        return taskAssignmentRepository.save(taskAssignment);
    }

    public void deleteTaskAssignment(Long id) {
        taskAssignmentRepository.deleteById(id);
    }
}
