//  Disclaimer: IMPORTANT:  This AsReader software is supplied to you by AsReader
//  Inc. ("AsReader") in consideration of your agreement to the following
//  terms, and your use, installation, modification or redistribution of
//  this AsReader software constitutes acceptance of these terms.  If you do
//  not agree with these terms, please do not use, install, modify or
//  redistribute this AsReader software.
//  
//  In consideration of your agreement to abide by the following terms, and
//  subject to these terms, AsReader grants you a personal, non-exclusive
//  license, under AsReader's copyrights in this original AsReader software (the
//  "AsReader Software"), to use, reproduce, modify and redistribute the AsReader
//  Software, with or without modifications, in source and/or binary forms;
//  provided that if you redistribute the AsReader Software in its entirety and
//  without modifications, you must retain this notice and the following
//  text and disclaimers in all such redistributions of the AsReader Software.
//  Neither the name, trademarks, service marks or logos of AsReader Inc. may
//  be used to endorse or promote products derived from the AsReader Software
//  without specific prior written permission from AsReader.  Except as
//  expressly stated in this notice, no other rights or licenses, express or
//  implied, are granted by AsReader herein, including but not limited to any
//  patent rights that may be infringed by your derivative works or by other
//  works in which the AsReader Software may be incorporated.
//  
//  The AsReader Software is provided by AsReader on an "AS IS" basis.  ASREADER
//  MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
//  THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS
//  FOR A PARTICULAR PURPOSE, REGARDING THE ASREADER SOFTWARE OR ITS USE AND
//  OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS.
//  
//  IN NO EVENT SHALL ASREADER BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL
//  OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
//  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
//  INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
//  MODIFICATION AND/OR DISTRIBUTION OF THE ASREADER SOFTWARE, HOWEVER CAUSED
//  AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE),
//  STRICT LIABILITY OR OTHERWISE, EVEN IF ASREADER HAS BEEN ADVISED OF THE
//  POSSIBILITY OF SUCH DAMAGE.
//  
//  Copyright (C) 2015 AsReader Inc. All Rights Reserved.
//
var exec = require('cordova/exec');

module.exports = {
	/***************** BARCODE ****************/
	barcodePowerOn: function(success, error) {
		exec(success, error, "AsReader", "barcodePowerOn", []);
	},
    barcodePowerOnAndConfigure: function(success, error, beepOn, vibrationOn, illuminationOn){
        exec(success, error, "AsReader", "barcodePowerOnAndConfigure", [beepOn,vibrationOn,illuminationOn]);
    },
	barcodePowerOff: function(success, error) {
		exec(success, error, "AsReader", "barcodePowerOff", []);
	},
    setBarcodeChargingControl: function(success, error, isOn) {
        exec(success, error, "AsReader", "setBarcodeChargingControl", [isOn]);
    },
	setBarcodePowerListener: function(listener){
		exec(listener, null, "AsReader", "setBarcodePowerListener", []);
	},
	setBarcodeStringListener: function(listener){
		exec(listener, null, "AsReader", "setBarcodeStringListener", []);
	},
	setBarcodeDataListener: function(listener){
		exec(listener, null, "AsReader", "setBarcodeDataListener", []);
	},
	setBarcodePluggedListener: function(listener){
		exec(listener, null, "AsReader", "setBarcodePluggedListener", []);
	},
	readBarcode: function(success, error){
		 exec(success, error, "AsReader", "readBarcode", []);
	},
    readBarcodeContinuously: function(success, error){
         exec(success, error, "AsReader", "readBarcodeContinuously", []);
    },
	stopReadBarcode: function(success, error){
		 exec(success, error, "AsReader", "stopReadBarcode", []);
	},
	isBarcodePlugged: function(success, error){
		 exec(success, error, "AsReader", "isBarcodePlugged", []);
	},
	getSDKVersion: function(success, error){
		 exec(success, error, "AsReader", "getSDKVersion", []);
	},
	setBatteryListener: function(listener){
		exec(listener, null, "AsReader", "setBatteryListener", []);
	},
	setReaderReadyListener: function(listener){
		exec(listener, null, "AsReader", "setReaderReadyListener", []);
	},
	configureBarcode: function(success,error,beepOn,vibrationOn,illuminationOn){
		exec(success, error, "AsReader", "configureBarcode", [beepOn,vibrationOn,illuminationOn]);
	},
   /**
    encoding The following are the values
    
    ASCII
    NEXTSTEP
    JapaneseEUC
    ISOLatin1
    SymbolString
    NonLossyASCII
    ShiftJIS
    ISOLatin2
    Unicode
    WindowsCP1251
    WindowsCP1252
    WindowsCP1253
    WindowsCP1254
    WindowsCP1250
    ISO2022JP
    MacOSRoman
    UTF8
    UTF16
    UTF16BigEndian
    UTF16LittleEndian
    UTF32String
    UTF32BigEndian
    UTF32LittleEndian
    Proprietary
    **/
	setBarcodeEncodingFormat: function(success, error,encoding){
		 exec(success, error, "AsReader", "setBarcodeEncodingFormat", [encoding]);
	},
    setChargingControlListener: function(listener){
        exec(listener, null, "AsReader", "setChargingControlListener", []);
    },
    setStartedReadListener: function(listener){
        exec(listener, null, "AsReader", "setStartedReadListener", []);
    },
    setStoppedReadListener: function(listener){
        exec(listener, null, "AsReader", "setStoppedReadListener", []);
    },
    setErrListener: function(listener){
        exec(listener, null, "AsReader", "setErrListener", []);
    },
    setErrDetailListener: function(listener){
        exec(listener, null, "AsReader", "setErrDetailListener", []);
    },
    getCurrentBattery: function(success, error){
        exec(success, error, "AsReader", "getCurrentBattery", []);
    },
    setBarcodeStringReceivedListener: function(listener){
        exec(listener, null, "AsReader", "setBarcodeStringReceivedListener", []);
    },
	/************** RFID *******************/
	isRfidOpened: function(success, error) {
		exec(success, error, "AsReader", "isRfidOpened", []);
	},
	rfidPowerOn: function(success, error) {
		exec(success, error, "AsReader", "rfidPowerOn", []);
	},
	rfidPowerOff: function(success, error) {
		exec(success, error, "AsReader", "rfidPowerOff", []);
	},
    setRfidChargingControl: function(success, error, isOn) {
        exec(success, error, "AsReader", "setRfidChargingControl", [isOn]);
    },
	isRfidPlugged: function(success, error){
		 exec(success, error, "AsReader", "isRfidPlugged", []);
	},
	configureRfid: function(success,error,beepOn,vibrationOn,illuminationOn){
		exec(success, error, "AsReader", "configureRfid", [beepOn,vibrationOn,illuminationOn]);
	},
	startReadTags: function(success, error) {
		exec(success, error, "AsReader", "startReadTags", []);
	},
	startReadTagsWithParams: function(success, error, mtnu, mtime, repeatCycle) {
		exec(success, error, "AsReader", "startReadTagsWithParams", [mtnu, mtime, repeatCycle]);
	},
	startReadTagsAndRssi: function(success, error) {
		exec(success, error, "AsReader", "startReadTagsAndRssi", []);
	},
	startReadTagsAndRssiWithParams: function(success, error, mtnu, mtime, repeatCycle) {
		exec(success, error, "AsReader", "startReadTagsAndRssiWithParams", [mtnu, mtime, repeatCycle]);
	},
	startReadTagsAndTid: function(success, error) {
		exec(success, error, "AsReader", "startReadTagsAndTid", []);
	},
	startReadTagsAndTidWithParams: function(success, error, mtnu, mtime, repeatCycle) {
		exec(success, error, "AsReader", "startReadTagsAndTidWithParams", [mtnu, mtime, repeatCycle]);
	},
	stopReadTags: function(success, error) {
		exec(success, error, "AsReader", "stopReadTags", []);
	},
	setRfidPowerListener: function(listener){
		exec(listener, null, "AsReader", "setRfidPowerListener", []);
	},
	setRfidStartedReadTagListener: function(listener){
		exec(listener, null, "AsReader", "setRfidStartedReadTagListener", []);
	},
	setRfidStartedReadTagWithRssiListener: function(listener){
		exec(listener, null, "AsReader", "setRfidStartedReadTagWithRssiListener", []);
	},
	setRfidPcEpcStringListener: function(listener){
		exec(listener, null, "AsReader", "setRfidPcEpcStringListener", []);
	},
	setRfidEpcStringListener: function(listener){
		exec(listener, null, "AsReader", "setRfidEpcStringListener", []);
	},
	setRfidPcEpcDataListener: function(listener){
		exec(listener, null, "AsReader", "setRfidPcEpcDataListener", []);
	},
	setRfidEpcDataListener: function(listener){
		exec(listener, null, "AsReader", "setRfidEpcDataListener", []);
	},
	setRfidPcEpcStringWithRssiListener: function(listener){
		exec(listener, null, "AsReader", "setRfidPcEpcStringWithRssiListener", []);
	},
	setRfidEpcStringWithRssiListener: function(listener){
		exec(listener, null, "AsReader", "setRfidEpcStringWithRssiListener", []);
	},
	setRfidEpcStringWithTidListener: function(listener){
		exec(listener, null, "AsReader", "setRfidEpcStringWithTidListener", []);
	},
	setRfidPluggedListener: function(listener){
		exec(listener, null, "AsReader", "setRfidPluggedListener", []);
	},
	notifyRegionTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyRegionTo", []);
	},
    notifySelectParamTo: function(listener,error){
		exec(listener, error, "AsReader", "notifySelectParamTo", []);
	},
	setSelectParamAndNotifyTo: function(listener,error,target,action,memoryBank,pointer,length,truncate,mask){
		exec(listener, error, "AsReader", "setSelectParamAndNotifyTo", [target,action,memoryBank,pointer,length,truncate,mask]);
	},
	notifyChannelTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyChannelTo", []);
	},
	setChannelAndNotifyTo: function(listener,error,channel,offset){
		exec(listener, error, "AsReader", "setChannelAndNotifyTo", [channel,offset]);
	},
	notifyFhLbtParamTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyFhLbtParamTo", []);
	},
	setFhLbtAndNotifyTo: function(listener,error,readTime,idleTime,carrierSenseTime,rfLevel,frequencyHopping,listenBeforeTalk,continuousWave){
		exec(listener, error, "AsReader", "setFhLbtAndNotifyTo", [readTime,idleTime,carrierSenseTime,rfLevel,frequencyHopping,listenBeforeTalk,continuousWave]);
	},
	notifyOutputPowerLevelTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyOutputPowerLevelTo", []);
	},
	setOutputPowerLevelAndNotifyTo: function(listener,error,power){
		exec(listener, error, "AsReader", "setOutputPowerLevelAndNotifyTo", [power]);
	},
	readTagMemoryNotifyTo: function(listener,error,accessPassword,epc,memoryBank,startAddress,dataLength){
		exec(listener, error, "AsReader", "readTagMemoryNotifyTo", [accessPassword,epc,memoryBank,startAddress,dataLength]);
	},
	notifyFreqHoppingTableTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyFreqHoppingTableTo", []);
	},
	setFreqHoppingTableAndNotifyTo: function(listener,error,tableSize,channels){
		exec(listener, error, "AsReader", "setFreqHoppingTableAndNotifyTo", [tableSize,channels]);
	},
    killTagAndNotifyTo: function(listener,error,accessPassword,epc){
		exec(listener, error, "AsReader", "killTagAndNotifyTo", [accessPassword,epc]);
	},
	lockTagAndNotifyTo: function(listener,error,accessPassword,epc,targetMemory, action){
		exec(listener, error, "AsReader", "lockTagAndNotifyTo", [accessPassword,epc,targetMemory, action]);
	},
	notifyRssiTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyRssiTo", []);
	},
	setAnticollisionMode: function(success,error,mode){
		exec(success, error, "AsReader", "setAnticollisionMode", [mode]);
	},
	setAnticollisionModeAndOptions: function(success,error,mode,qStart,qMax,qMin){
		exec(success, error, "AsReader", "setAnticollisionModeAndOptions", [mode,qStart,qMax,qMin]);
	},
	updateRfidRegistryAndNotifyTo: function(listener,error){
		exec(listener, error, "AsReader", "updateRfidRegistryAndNotifyTo", []);
	},
	notifyStopConditionTo: function(listener,error){
		exec(listener, error, "AsReader", "notifyStopConditionTo", []);
	},
	setStopConditionAndNotifyTo: function(listener,error,mtnu,mtime,repeatCycle){
		exec(listener, error, "AsReader", "setStopConditionAndNotifyTo", [mtnu,mtime,repeatCycle]);
	},
	notifySessionTo: function(listener,error){
		exec(listener, error, "AsReader", "notifySessionTo", []);
	},
	setSessionAndNotifyTo: function(listener,error,session){
		exec(listener, error, "AsReader", "setSessionAndNotifyTo", [session]);
	},               
    rfidReaderPower: function(success, error, on, connectedBeep) {
        exec(success, error, "AsReader", "rfidReaderPower", [on, connectedBeep]);
    },
    rfidReaderPowerOnWithBeep: function(success, error, beepOn, vibrationOn, illuminationOn) {
        exec(success, error, "AsReader", "rfidReaderPowerOnWithBeep", [beepOn, vibrationOn, illuminationOn]);
    },
    startReadTagsAndRFM: function(success, error, codeType, mtnu, mtime, repeatCycle) {
        exec(success, error, "AsReader", "startReadTagsAndRFM", [codeType, mtnu, mtime, repeatCycle]);
    },
    getAnticollision: function(success, error) {
        exec(success, error, "AsReader", "getAnticollision", []);
    },
    setOptimumFrequencyHoppingTableAndNotifyTo: function(listener,error){
        exec(listener, error, "AsReader", "setOptimumFrequencyHoppingTableAndNotifyTo", []);
    },
    setFrequencyHoppingModeAndNotifyTo: function(listener,error,mode){
        exec(listener, error, "AsReader", "setFrequencyHoppingModeAndNotifyTo", [mode]);
    },
    setWriteToTagMemoryToAsciiAndNotifyTo: function(listener, error, epc, dataToWrite) {
         exec(listener, error, "AsReader", "setWriteToTagMemoryToAsciiAndNotifyTo", [epc, dataToWrite]);
    },
    setWriteToTagMemoryToHexAndNotifyTo: function(listener, error, epc, dataToWrite) {
        exec(listener, error, "AsReader", "setWriteToTagMemoryToHexAndNotifyTo", [epc, dataToWrite]);
    },
    setRSSIThreshold: function(success,error,threshold)  {
        exec(success, error, "AsReader", "setRSSIThreshold", [threshold]);
    },
    notifyRSSIThresholdTo: function(listener, error) {
        exec(listener, error, "AsReader", "notifyRSSIThresholdTo", []);
    },
    setRfidPcEpcSensorDataWithsensorValueWithRssiListener: function(listener){
        exec(listener, null, "AsReader", "setRfidPcEpcSensorDataWithsensorValueWithRssiListener", []);
    },
    setRfidReaderConnectedListener: function(listener){
         exec(listener, null, "AsReader", "setRfidReaderConnectedListener", []);
    },
    setRfidStoppedReadTagsListener: function(listener){
        exec(listener, null, "AsReader", "setRfidStoppedReadTagsListener", []);
    },
    setRfidDidSetFreqHPTableListener: function(listener){
        exec(listener, null, "AsReader", "setRfidDidSetFreqHPTableListener", []);
    },
    setRfidChargingControlListener: function(listener){
        exec(listener, null, "AsReader", "setRfidChargingControlListener", []);
    },
    setRfidPushedTriggerButtonListener: function(listener){
        exec(listener, null, "AsReader", "setRfidPushedTriggerButtonListener", []);
    },
    setRfidReleasedTriggerButtonListener: function(listener){
        exec(listener, null, "AsReader", "setRfidReleasedTriggerButtonListener", []);
    },
    notifyReaderInfoTo: function(listener, error, infoType){
        exec(listener, error, "AsReader", "notifyReaderInfoTo", [infoType]);
    },
    setRfidPcEpcSensorDataWithSensorDataListener: function(listener){
        exec(listener, null, "AsReader", "setRfidPcEpcSensorDataWithSensorDataListener", []);
    },
    setRfidTriggerModeDefault: function(success, error, isDefault){
        exec(success, error, "AsReader", "setRfidTriggerModeDefault", [isDefault]);
    },
    setRfidAnticolParamListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAnticolParamListener", []);
    },
    setRfidAnticolParamWithStartWithMaxWithMinListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAnticolParamWithStartWithMaxWithMinListener", []);
    },
    notifyGetFrequencyHoppingModeLevelTo: function(listener, error){
        exec(listener, error, "AsReader", "notifyGetFrequencyHoppingModeLevelTo", []);
    },
    setRfidOutputPowerLevelWithMaxPowerWithMainPowerListener: function(listener){
        exec(listener, null, "AsReader", "setRfidOutputPowerLevelWithMaxPowerWithMainPowerListener", []);
    },
    setAnticollisionModeAndCount: function(success,error,mode,qStart,qMax,qMin,count){
            exec(success, error, "AsReader", "setAnticollisionModeAndCount", [mode,qStart,qMax,qMin,count]);
     },
    setRfidAnticollisionModeListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAnticollisionModeListener", []);
    },
    setRfidAnticollisionModeAndOptionsListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAnticollisionModeAndOptionsListener", []);
    },
    setRfidAnticollisionModeAndCountListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAnticollisionModeAndCountListener", []);
    },
    setRfidAckReceivedListener: function(listener){
        exec(listener, null, "AsReader", "setRfidAckReceivedListener", []);
    },
    notifyReaderSettingInfoTo: function(listener, error){
        exec(listener, error, "AsReader", "notifyReaderSettingInfoTo", []);
    },
};