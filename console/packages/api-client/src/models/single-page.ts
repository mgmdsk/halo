/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from "./metadata";
// May contain unused imports in some cases
// @ts-ignore
import { SinglePageSpec } from "./single-page-spec";
// May contain unused imports in some cases
// @ts-ignore
import { SinglePageStatus } from "./single-page-status";

/**
 *
 * @export
 * @interface SinglePage
 */
export interface SinglePage {
  /**
   *
   * @type {string}
   * @memberof SinglePage
   */
  apiVersion: string;
  /**
   *
   * @type {string}
   * @memberof SinglePage
   */
  kind: string;
  /**
   *
   * @type {Metadata}
   * @memberof SinglePage
   */
  metadata: Metadata;
  /**
   *
   * @type {SinglePageSpec}
   * @memberof SinglePage
   */
  spec: SinglePageSpec;
  /**
   *
   * @type {SinglePageStatus}
   * @memberof SinglePage
   */
  status?: SinglePageStatus;
}
