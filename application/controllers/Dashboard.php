<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {


	public function index()
	{
		$this->load->helper('url');

		//deja on veus l'heure

		$this->load->view('dashboard/index');
	}
}
