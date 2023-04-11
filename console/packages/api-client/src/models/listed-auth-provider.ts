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

/**
 *
 * @export
 * @interface ListedAuthProvider
 */
export interface ListedAuthProvider {
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  authenticationUrl?: string;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  bindingUrl?: string;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  displayName: string;
  /**
   *
   * @type {boolean}
   * @memberof ListedAuthProvider
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  helpPage?: string;
  /**
   *
   * @type {boolean}
   * @memberof ListedAuthProvider
   */
  isBound?: boolean;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  logo?: string;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof ListedAuthProvider
   */
  supportsBinding?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ListedAuthProvider
   */
  privileged?: boolean;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  unbindingUrl?: string;
  /**
   *
   * @type {string}
   * @memberof ListedAuthProvider
   */
  website?: string;
}
