package com.ola.reimburshDash.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ola.reimburshDash.model.Request;
import com.ola.reimburshDash.model.Users;
import com.ola.reimburshDash.repository.ReimburshmentRepository;
import com.ola.reimburshDash.service.ReimburshmentService;

@Service
public class ReimburshmentServiceImpl implements ReimburshmentService {

	@Autowired
	ReimburshmentRepository reimburshmentRepository;
	
	public List<Request> getEmployeeLastFiveRequests(Users user) {
		
		List<Request> requestList = new ArrayList<Request>();
		for(int i=1;i<=5;i++){
			Request r = new Request();
			r.setRequestStatus("Pending");
			r.setRequestDate(new Date(System.currentTimeMillis()));
			r.setRequestRaisedBy(user.getUsername());
			r.setRequestManager("Modi");
			requestList.add(r);
		}
		return requestList;
		
	}

	public List<Request> getManagerLastFiveApprovedRequests(Users user) {
		List<Request> requestList = new ArrayList<Request>();
		return requestList;
	}

	public List<Request> getManagerLastFiveCancelledRequests(Users user) {
		List<Request> requestList = new ArrayList<Request>();
		return requestList;
	}

	public List<Request> getManagerLastFivePendingRequests(Users user) {
		List<Request> requestList = new ArrayList<Request>();
		return requestList;
	}

	@Transactional
	public void createRequest(Request r) {
		reimburshmentRepository.createRequest(r);
	}

	@Transactional
	public void deleteRequest(Request r) {
		reimburshmentRepository.deleteRequest(r);
	}

	@Transactional
	public Request updateRequest(Request r) {
		return reimburshmentRepository.updateRequest(r);
	}

	@Transactional
	public Request getRequest(int requestId) {
		return reimburshmentRepository.getRequest(requestId);
	}

}
