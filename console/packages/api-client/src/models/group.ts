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
import { GroupSpec } from "./group-spec";
// May contain unused imports in some cases
// @ts-ignore
import { GroupStatus } from "./group-status";
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from "./metadata";

/**
 *
 * @export
 * @interface Group
 */
export interface Group {
  /**
   *
   * @type {string}
   * @memberof Group
   */
  apiVersion: string;
  /**
   *
   * @type {string}
   * @memberof Group
   */
  kind: string;
  /**
   *
   * @type {Metadata}
   * @memberof Group
   */
  metadata: Metadata;
  /**
   *
   * @type {GroupSpec}
   * @memberof Group
   */
  spec: GroupSpec;
  /**
   *
   * @type {GroupStatus}
   * @memberof Group
   */
  status?: GroupStatus;
}
