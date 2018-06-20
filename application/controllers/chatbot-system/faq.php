<?php

class Faq extends My_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('faq_model', 'faq');
        $this->load->model('category_model', 'category');
        $this->data['module_name'] = 'Faq Manager';
        $this->data['show_add_link'] = true;
        $this->data['show_sort_link'] = true;
        $this->header['page_name']	= $this->router->fetch_class();
    }

    public function index()
    {
        $this->data['sub_module_name'] = 'Faqs List';
        $this->data['faqs'] = $this->faq->get();
        $this->data['body'] = BACKENDFOLDER . '/faq/_list';
        $this->render();
    }

     public function unanswered()
    {
        $this->data['sub_module_name'] = 'Unanswered Questions List';
        $this->data['faqs'] = $this->faq->getunanswered();
        $this->data['body'] = BACKENDFOLDER . '/faq/_list';
        $this->render();
    }

    public function addUnanswered()
    {
        $question = ($this->input->post('question'));
        $result = $this->faq->addUnansweredQuestions($question);
        return $result;
    }


    public function create()
    {
        $id = segment(4);
        $this->data['categories'] = $this->category->getAllData();
        if ($id == '')
            $this->data['faq'] = $this->faq->get();
        else
            $this->data['faq'] = $this->faq->get('', array('id !=' => $id));
        if ($_POST) {
            $post = $_POST;
            $this->faq->id = $id;

            $this->form_validation->set_rules($this->faq->rules($id));
            if ($this->form_validation->run()) {
                if ($id == '') {
                    $res = $this->faq->save($post);
                } else {
                    $condition = array('id' => $id);
                    $res = $this->faq->save($post, $condition);
                }

                $res ? set_flash('msg', 'Data saved') : set_flash('msg', 'Data could not be saved');
                redirect(BACKENDFOLDER . '/faq');
            } else {
                $this->form($id, 'faq');
            }
        } else {
            $this->data['addJs'] = array('assets/datepicker/bootstrap-datepicker.js', 'assets/' . BACKENDFOLDER . '/dist/js/faqs.js', 'assets/' . BACKENDFOLDER . '/dist/js/jquery.textarea-counter.js');
            $this->data['addCss'] = array('assets/datepicker/datepicker3.css');
            $this->form($id, 'faq');
        }
    }

    public function delete()
    {
        $post = $_POST;

        $this->load->library('restrict_delete');
        $params = "";
        if(isset($post) && !empty($post)) {
            $selected_ids = $post['selected'];
            $deleted = 0;
            foreach($selected_ids as $selected_id){
                if($this->restrict_delete->check_for_delete($params, $selected_id)) {
                    $res = $this->faq->delete(array('id' => $selected_id));
                    if ($res) {
                        $deleted++;
                    }
                }
            }

            $deleted ? set_flash('msg', $deleted . ' out of ' . count($selected_ids) . ' data deleted successfully') : set_flash('msg', 'Data could not be deleted');

        } else {
            $id = segment(4);
            if($this->restrict_delete->check_for_delete($params, $id)) {
                $id = segment(4);
                $res = $this->faq->delete(array('id' => $id));

                $success_msg = $res ? 'Data deleted' : 'Error in deleting data';
            } else {
                $msg = 'This data cannot be deleted. It is being used in system.';
            }

            $success_msg ? set_flash('msg', $success_msg) : set_flash('msg', $msg);
        }

        redirect(BACKENDFOLDER . '/faq');
    }


    public function status()
    {
        $post = $_POST;
        $status = segment(4) == 'Active' ? 'InActive' : 'Active';

        if(isset($post) && !empty($post)) {
            $selected_ids = $post['selected'];
            $changed = 0;
            foreach($selected_ids as $selected_id) {
                $res = $this->faq->changeStatus('faq', $status, $selected_id);
                if($res) {
                    $changed++;
                }
            }
            $changed ? set_flash('msg', $changed . ' out of ' . count($selected_ids) . ' data status changed successfully') : set_flash('msg', 'Status could not be changed');
        } else {
            $id = segment(5);
            $res = $this->faq->changeStatus('faq', $status, $id);

            $res ? set_flash('msg', 'Status changed') : set_flash('msg', 'Status could not be changed');
        }

        redirect(BACKENDFOLDER . '/faq');
    }

    function sort_faq()
    {
        if ($this->input->post()) {
            $ids = explode(',', $this->input->post('sort_order'));
            for ($i = 0; $i < count($ids); $i++) {
                $data['sort_order'] = $i;
                $this->db->where('id', $ids[$i]);
                $this->db->update($this->faq, $data);
            }
        } else {
            $data['faqs'] = $this->faq_manager->get_faqs_for_sort();
            $this->load->view('cms/sort_faqs', $data);
        }
    }

}