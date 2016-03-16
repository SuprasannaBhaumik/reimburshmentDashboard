package com.ola.reimburshDash.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="USER_ROLES")
public class UserRoles {
	
	@Id
	@Column(name="ROLEID")
	private int userRoleId;
	
	@Column(name="USERNAME")
	private String username;
	
	@Column(name="ROLE")
	private Role role;

	public int getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(int userRoleId) {
		this.userRoleId = userRoleId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	

}
