/*
 * Copyright © 2016-2018 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ChangeOriginatorConfigDirective from './change-originator-config.directive';
import ScriptConfigDirective from './script-config.directive';
import ToEmailConfigDirective from './to-email-config.directive';

export default angular.module('thingsboard.ruleChain.config.transform', [])
    .directive('tbTransformationNodeChangeOriginatorConfig', ChangeOriginatorConfigDirective)
    .directive('tbTransformationNodeScriptConfig', ScriptConfigDirective)
    .directive('tbTransformationNodeToEmailConfig', ToEmailConfigDirective)
    .name;
