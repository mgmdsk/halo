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
import { CommentEmailOwner } from "./comment-email-owner";

/**
 *
 * @export
 * @interface ReplyRequest
 */
export interface ReplyRequest {
  /**
   *
   * @type {boolean}
   * @memberof ReplyRequest
   */
  allowNotification?: boolean;
  /**
   *
   * @type {string}
   * @memberof ReplyRequest
   */
  content: string;
  /**
   *
   * @type {CommentEmailOwner}
   * @memberof ReplyRequest
   */
  owner?: CommentEmailOwner;
  /**
   *
   * @type {string}
   * @memberof ReplyRequest
   */
  quoteReply?: string;
  /**
   *
   * @type {string}
   * @memberof ReplyRequest
   */
  raw: string;
}
