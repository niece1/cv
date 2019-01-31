<?php
/**
 * Controller SiteController
 */
class SiteController
{
    /**
     * Main page action
     */
    public function actionIndex()
    {
      // Form variables
      $userName = false;
      $userEmail = false;
      $userSubject = false;
      $userText = false;
      $result = false;

            // Form's error processing
      if (isset($_POST['submit'])) {
                // If form sent
                // Fetch form data
        $userName = $_POST['userName'];
        $userSubject = $_POST['userSubject'];
        $userEmail = $_POST['userEmail'];
        $userText = $_POST['userText'];
                // Error flag
        $errors = false;

                // Fields validation
        if (!Contact::checkName($userName)) {
            $errors[] = 'Name must consist of at least two letters';
        }
        if (!Contact::checkSubject($userSubject)) {
            $errors[] = 'Subject cannot be empty';
        }
        if (!Contact::checkEmail($userEmail)) {
            $errors[] = 'Incorrect email';
        }


        if (!Contact::checkMessage($userText)) {
            $errors[] = 'Message cannot be empty';
        }
        if ($errors == false) {
                // If there are no errors
                // Send email to admin
            $adminEmail = 'niece@ukr.net';
            $message = "Name: {$userName}. Subject: {$userSubject}. Message: {$userText}. From {$userEmail}";
            $subject = 'Mail subject';
            $result = mail($adminEmail, $subject, $message);
            $result = true;

        }
    }
        // View connect
    require_once(ROOT . '/views/index.php');
    return true;
    }
}
