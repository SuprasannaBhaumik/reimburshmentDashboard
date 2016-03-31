package com.ola.reimburshDash.service;

import java.util.List;

import com.ola.reimburshDash.model.Request;
import com.ola.reimburshDash.model.Users;


public interface ReimburshmentService {
	
	List<Request> getEmployeeLastFiveRequests(Users user);
	List<Request> getManagerLastFiveApprovedRequests(Users user);
	List<Request> getManagerLastFiveCancelledRequests(Users user);
	List<Request> getManagerLastFivePendingRequests(Users user);
	void createRequest(Request r);
	void deleteRequest(Request r);
	Request updateRequest(Request r);
	Request getRequest(int requestId);
}
