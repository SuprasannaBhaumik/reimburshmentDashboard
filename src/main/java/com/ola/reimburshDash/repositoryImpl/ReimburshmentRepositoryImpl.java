package com.ola.reimburshDash.repositoryImpl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ola.reimburshDash.model.Request;
import com.ola.reimburshDash.model.Users;
import com.ola.reimburshDash.repository.ReimburshmentRepository;




@Repository
public class ReimburshmentRepositoryImpl implements ReimburshmentRepository {

	@Autowired
	SessionFactory sessionFactory;
	
	
	public List<Request> getEmployeeLastFiveRequests(Users user) {
		return null;
	}

	public List<Request> getManagerLastFiveApprovedRequests(Users user) {
		return null;
	}

	public List<Request> getManagerLastFiveCancelledRequests(Users user) {
		return null;
	}

	public List<Request> getManagerLastFivePendingRequests(Users user) {
		return null;
	}

	public void createRequest(Request r) {
		Session session = sessionFactory.getCurrentSession();
		session.save(r);
	}

	public void deleteRequest(Request r) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(r);
	}

	public Request updateRequest(Request r) {
		Request req = getRequest(r.getRequestId());
		//changing the req now
		//req.setRequestStatus(r.getRequestStatus());
		Session session = sessionFactory.getCurrentSession();
		session.save(req);
		return req;
	}

	public Request getRequest(int requestId) {
		Session session = sessionFactory.getCurrentSession();
		Request req = (Request) session.get(Request.class,requestId);
		return req;
	}

}
