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
              # Mail Content
        $content = "Name: $name\n";
        $content .= "Email: $email\n\n";
        $content .= "Phone: $phone\n";
        $content .= "Message:\n$message\n";

        // email headers.
        $headers = "From: $name &lt;$email&gt;";

        // Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }

         else {
            // Not a POST request, set a 403 (forbidden) response code.
            http_response_code(403);
            echo "There was a problem with your submission, please try again.";
        }
  
        // View connect
    require_once(ROOT . '/views/index.php');
    
    }
}
