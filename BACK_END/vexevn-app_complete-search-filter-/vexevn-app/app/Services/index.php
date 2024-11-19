<?php
use App\Services\SpeedSMSAPI;

require("SpeedSMSAPI.php");
require("TwoFactorAPI.php");
function getUserInfo() {
    $sms = new SpeedSMSAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $userInfo = $sms->getUserInfo();
    var_dump($userInfo);
}

function sendSMS($phone, $content) {
    $sms = new SpeedSMSAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $return = $sms->sendSMS([$phone], $content, SpeedSMSAPI::SMS_TYPE_CSKH, "");
    var_dump($return);
}

//$content contain OTP conde only
function sendVoiceOTP($phone, $content) {
    $sms = new SpeedSMSAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $return = $sms->sendVoice($phone, $content);
    var_dump($return);
}

function createPIN($phone, $content, $appId) {
    $twoFA = new TwoFactorAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $result = $twoFA->pinCreate($phone, $content, $appId);
    var_dump($result);

}

function verifyPIN($phone, $pinCode, $appId) {
    $twoFA = new TwoFactorAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $result = $twoFA->pinVerify($phone, $pinCode, $appId);
    var_dump($result);
}

function sendMMS($phone, $content, $link) {
    $sms = new SpeedSMSAPI("Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA");
    $return = $sms->sendMMS([$phone], $content, $link, "device id");
    var_dump($return);
}


//using send voice OTP
//sendVoiceOTP("849xxxxx", "1234");
