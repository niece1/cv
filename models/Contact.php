<?php
/**
 * Contact class - contact form model
 */

 class Contact
 {
   public static function checkName($userName)
   {
     if (strlen($userName) >= 2) {
            return true;
        }
        return false;
   }

   public static function checkSubject($userSubject)
   {
     if (strlen($userSubject) >= 1) {
            return true;
        }
        return false;
   }

   public static function checkEmail($email)
   {
     if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }
        return false;
   }

   public static function checkMessage($userText)
   {
     if (strlen($userText) >= 1) {
            return true;
        }
        return false;
   }
 }
