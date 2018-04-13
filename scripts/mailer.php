<?php
// first_name=Travis&last_name=Mathews&telephone=513&email=xenoaurora%40gmail.com&details=test
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $firstName = strip_tags(trim($_POST["first_name"]));
        $firstName = str_replace(array("\r","\n"),array(" "," "),$firstName);
        $lastName = strip_tags(trim($_POST["last_name"]));
        $lastName = str_replace(array("\r","\n"),array(" "," "),$lastName);
        $telephone = filter_var(trim($_POST["telephone"]), FILTER_SANITIZE_NUMBER_INT);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["details"]);

        // Check that data was sent to the mailer.
        if ( empty($firstName) OR empty($lastName) OR empty($telephone) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "travis@digitalfoundrymedia.com";

        // Set the email subject.
        $subject = "New contact from $firstName $lastName";

        // Build the email content.
        $email_content = "Name: $firstName\n";
        $email_content .= "Name: $lastName\n";
        $email_content .= "Name: $telephone\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $firstName <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>