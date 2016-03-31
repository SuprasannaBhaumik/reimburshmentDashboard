package com.ola.reimburshDash.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="REQUEST")
public class Request {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="REQ_ID")
	private int requestId;
	
	@Column(name="REQ_STS")
	private String requestStatus;
	
	@Column(name="REQ_DT")
	private Date requestDate;
	
	@Column(name="REQ_RAISEDBY")
	private String requestRaisedBy;
	
	@Column(name="REQ_MANAGER")
	private String requestManager;
	

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public String getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}

	public Date getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	public String getRequestRaisedBy() {
		return requestRaisedBy;
	}

	public void setRequestRaisedBy(String requestRaisedBy) {
		this.requestRaisedBy = requestRaisedBy;
	}

	public String getRequestManager() {
		return requestManager;
	}

	public void setRequestManager(String requestManager) {
		this.requestManager = requestManager;
	}
	
}
