<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
        //je veux loader un composant js
        //avec une vue partielle
        $data['partialViews']['horloge'] = $this->load->view('horloge/horloge',array(), true);
        $data['partialViews']['meteo'] = $this->load->view('meteo/meteo',array(), true);
        $data['partialViews']['news'] = $this->load->view('news/news',array(), true);

		$this->load->view('index', $data);
	}
}
