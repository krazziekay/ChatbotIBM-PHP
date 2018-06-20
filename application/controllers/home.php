<?php

class Home extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->username = 'a01fca35-a3c5-4e9d-b9f2-18b88a06e6f9';
        $this->password = '8jv5cqMfBA5C';
        $this->workspace = '0b468330-0ba9-4f9d-a279-9ec6f98ddd86';

        $this->messageURL='https://gateway.watsonplatform.net/assistant/api/v1/workspaces/'.$this->workspace.'/message?version=2018-02-16';

    }

    public function index()
    {
       
        $this->load->view('home');
    }


    /**
     * An action defined to control the click event of button with id Publish
     * This function makes an ajax call to send the data to the IBM Watson service
     */
//    public function addingIntents() {
//        $username = 'a01fca35-a3c5-4e9d-b9f2-18b88a06e6f9';
//        $password = '8jv5cqMfBA5C';
//        $workspace = '0b468330-0ba9-4f9d-a279-9ec6f98ddd86';
//
//
//        $intent = '';
//        $example = '';
//        $dialog_node = $intent;
//        $conditions = '#'.$intent;
//
//        $output = (object)array('text' => '');//this is the answer
//
//
//        $intentResult = '';
//
//        if( strpos($referalLink, 'edit')) {//Edit post
//            //First adding the intent, which is the question
//            $dialogURL='https://gateway.watsonplatform.net/assistant/api/v1/workspaces/'.$workspace.'/dialog_nodes/'.$dialog_node.'?version=2018-02-16';
//
//            // After adding the intent, we now add the dialog, which is the answer
//            $params2 = json_encode( array(
//                'dialog_node' => $dialog_node,
//                'conditions' => $conditions,
//                'output' => $output,
//                'title' => $dialog_node
//            ) );
//            $ch2 = curl_init();
//            curl_setopt($ch2, CURLOPT_URL, $dialogURL);
//            curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
//            curl_setopt($ch2, CURLOPT_POST, true);
//            curl_setopt($ch2, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
//            curl_setopt($ch2, CURLOPT_POSTFIELDS, $params2);
//            curl_setopt($ch2, CURLOPT_USERPWD, "$username:$password");
//
//            $dialogNodeResult=curl_exec ($ch2);
//            curl_close ($ch2);
//        }
//        else {//Add post
//            //First adding the intent, which is the question
//            $intentURL='https://gateway.watsonplatform.net/assistant/api/v1/workspaces/'.$workspace.'/intents?version=2018-02-16';
//            $dialogURL='https://gateway.watsonplatform.net/assistant/api/v1/workspaces/'.$workspace.'/dialog_nodes?version=2018-02-16';
//
//            $params1 = json_encode( array(
//                "intent" => $intent,
//                "examples" => array((object)["text" => $example])
//            ) );
//            $ch1 = curl_init();
//            curl_setopt($ch1, CURLOPT_URL, $intentURL);
//            curl_setopt($ch1, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
//            curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
//            curl_setopt($ch1, CURLOPT_POST, true);
//            curl_setopt($ch1, CURLOPT_POSTFIELDS, $params1);
//            curl_setopt($ch1, CURLOPT_USERPWD, "$username:$password");
//            $intentResult=curl_exec ($ch1);
//            curl_close ($ch1);
//
//
//            // After adding the intent, we now add the dialog, which is the answer
//            $params2 = json_encode( array(
//                'dialog_node' => $dialog_node,
//                'conditions' => $conditions,
//                'output' => $output,
//                'title' => $dialog_node
//            ) );
//            $ch2 = curl_init();
//            curl_setopt($ch2, CURLOPT_URL, $dialogURL);
//            curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
//            curl_setopt($ch2, CURLOPT_POST, true);
//            curl_setopt($ch2, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
//            curl_setopt($ch2, CURLOPT_POSTFIELDS, $params2);
//            curl_setopt($ch2, CURLOPT_USERPWD, "$username:$password");
//
//            $dialogNodeResult=curl_exec ($ch2);
//            curl_close ($ch2);
//
//        }
//
//    }



    public function getAnswer()
    {
        $params1 = json_encode($this->input->post());
        $ch1 = curl_init();
        curl_setopt($ch1, CURLOPT_URL, $this->messageURL);
        curl_setopt($ch1, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
        curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch1, CURLOPT_POST, true);
        curl_setopt($ch1, CURLOPT_POSTFIELDS, $params1);
        curl_setopt($ch1, CURLOPT_USERPWD, "$this->username:$this->password");
        $result = curl_exec($ch1);
        curl_close($ch1);

        echo json_encode($result);
    }

}