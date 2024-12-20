/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient, SchemaContract } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates schema configuration for the API.
 *
 * @summary Creates or updates schema configuration for the API.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateApiSchema.json
 */
async function apiManagementCreateApiSchema() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const apiId = "59d6bb8f1f7fab13dc67ec9b";
    const schemaId = "ec12520d-9d48-4e7b-8f39-698ca2ac63f1";
    const parameters: SchemaContract = {
        contentType: "application/vnd.ms-azure-apim.xsd+xml",
        value:
            '<s:schema elementFormDefault="qualified" targetNamespace="http://ws.cdyne.com/WeatherWS/" xmlns:tns="http://ws.cdyne.com/WeatherWS/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:apim-wsdltns="http://ws.cdyne.com/WeatherWS/">\r\n  <s:element name="GetWeatherInformation">\r\n    <s:complexType />\r\n  </s:element>\r\n  <s:element name="GetWeatherInformationResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetWeatherInformationResult" type="tns:ArrayOfWeatherDescription" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ArrayOfWeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="WeatherDescription" type="tns:WeatherDescription" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="WeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="PictureURL" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityForecastByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityForecastByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetCityForecastByZIPResult" type="tns:ForecastReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ForecastReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ForecastResult" type="tns:ArrayOfForecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="ArrayOfForecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="Forecast" nillable="true" type="tns:Forecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="Forecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Date" type="s:dateTime" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Desciption" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="Temperatures" type="tns:temp" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="ProbabilityOfPrecipiation" type="tns:POP" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="temp">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="MorningLow" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="DaytimeHigh" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="POP">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="Nighttime" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Daytime" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityWeatherByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityWeatherByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="1" maxOccurs="1" name="GetCityWeatherByZIPResult" type="tns:WeatherReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="WeatherReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Temperature" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="RelativeHumidity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Wind" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Pressure" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Visibility" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WindChill" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Remarks" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="ArrayOfWeatherDescription" nillable="true" type="tns:ArrayOfWeatherDescription" />\r\n  <s:element name="ForecastReturn" nillable="true" type="tns:ForecastReturn" />\r\n  <s:element name="WeatherReturn" type="tns:WeatherReturn" />\r\n</s:schema>'
    };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.apiSchema.beginCreateOrUpdateAndWait(
        resourceGroupName,
        serviceName,
        apiId,
        schemaId,
        parameters
    );
    console.log(result);
}

async function main() {
    apiManagementCreateApiSchema();
}

main().catch(console.error);
