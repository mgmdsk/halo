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
import { PersonalAccessTokenSpec } from "./personal-access-token-spec";

/**
 *
 * @export
 * @interface PersonalAccessToken
 */
export interface PersonalAccessToken {
  /**
   *
   * @type {string}
   * @memberof PersonalAccessToken
   */
  apiVersion: string;
  /**
   *
   * @type {string}
   * @memberof PersonalAccessToken
   */
  kind: string;
  /**
   *
   * @type {Metadata}
   * @memberof PersonalAccessToken
   */
  metadata: Metadata;
  /**
   *
   * @type {PersonalAccessTokenSpec}
   * @memberof PersonalAccessToken
   */
  spec?: PersonalAccessTokenSpec;
}
