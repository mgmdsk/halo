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
import { Ref } from "./ref";

/**
 *
 * @export
 * @interface SearchEngineSpec
 */
export interface SearchEngineSpec {
  /**
   *
   * @type {string}
   * @memberof SearchEngineSpec
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof SearchEngineSpec
   */
  displayName: string;
  /**
   *
   * @type {string}
   * @memberof SearchEngineSpec
   */
  logo?: string;
  /**
   *
   * @type {string}
   * @memberof SearchEngineSpec
   */
  postSearchImpl?: string;
  /**
   *
   * @type {Ref}
   * @memberof SearchEngineSpec
   */
  settingRef?: Ref;
  /**
   *
   * @type {string}
   * @memberof SearchEngineSpec
   */
  website?: string;
}
