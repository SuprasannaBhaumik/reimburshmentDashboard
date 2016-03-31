package com.ola.reimburshDash.repository;

import java.util.List;

import com.ola.reimburshDash.model.Request;
import com.ola.reimburshDash.model.Users;

public interface ReimburshmentRepository {
	
	List<Request> getEmployeeLastFiveRequests(Users user);
	List<Request> getManagerLastFiveApprovedRequests(Users user);
	List<Request> getManagerLastFiveCancelledRequests(Users user);
	List<Request> getManagerLastFivePendingRequests(Users user);
	void createRequest(Request r);
	void deleteRequest(Request r);
	Request updateRequest(Request r);
	Request getRequest(int requestId);
}
