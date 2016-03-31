package com.ola.reimburshDash.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.ola.reimburshDash.model.Request;
import com.ola.reimburshDash.model.Users;
import com.ola.reimburshDash.service.ReimburshmentService;

@Controller
public class LoginController {
	
	@Autowired
	ReimburshmentService service;
	 

	@RequestMapping(value = { "/", "/home**" }, method = RequestMethod.GET)
	public ModelAndView defaultPage() {

	  ModelAndView model = new ModelAndView();
	  model.addObject("title", "Welcome to Claims Portal");
	  model.addObject("message", "This is default page!");
	  
	  //creating a dummy user
	  Users user = new Users();
	  user.setUsername("Tom Cruise");
	  
	  List<Request> requestList = service.getEmployeeLastFiveRequests(user);
	  Gson gson = new Gson();
	  String jsonCartList = gson.toJson(requestList);
	  System.out.println("jsonCartList: " + jsonCartList.replaceAll("\"", "/\'"));
	  
	  model.addObject("initDataForEmpSubsLastFive",jsonCartList.replaceAll("\"", "\'"));
	  
	  //model.addObject("initDataForEmpSubsLastFive",jsonData);
	  model.addObject("initDataForManagerApprovedLastestFive","data");
	  model.addObject("initDataForManagerRejectedLastFive","data");
	  model.addObject("initDataForManagerPendingLastestFive","data");
	  model.setViewName("home");
	  return model;

	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
		@RequestParam(value = "logout", required = false) String logout) {

	  ModelAndView model = new ModelAndView();
	  if (error != null) {
		model.addObject("error", "Invalid username and password!");
	  }

	  if (logout != null) {
		model.addObject("msg", "You've been logged out successfully.");
	  }
	  model.setViewName("login");

	  return model;

	}
	
	//for 403 access denied page
	@RequestMapping(value = "/accessDenied", method = RequestMethod.GET)
	public ModelAndView accesssDenied() {

	  ModelAndView model = new ModelAndView();
	  //check if user is login
	  Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	  if (!(auth instanceof AnonymousAuthenticationToken)) {
		UserDetails userDetail = (UserDetails) auth.getPrincipal();	
		model.addObject("username", userDetail.getUsername());
	  }
		
	  model.setViewName("accessDenied");
	  return model;

	}
}
