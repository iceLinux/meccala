/*******************************************************************************
 * OpenAjax_Registry.js
 *
 * This file (hosted at http://www.openajax.org/Registry/OpenAjax_Registry.js)
 * contains the latest approved version of the OpenAjax Registry.
 * For more information what the Registry is and how it is managed, see:
 *
 *   http://www.openajax.org/member/wiki/OpenAjax_Registry
 *
 * Copyright 2006-2007 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not 
 * use this file except in compliance with the License. You may obtain a copy 
 * of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless 
 * required by applicable law or agreed to in writing, software distributed 
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the 
 * specific language governing permissions and limitations under the License.
 *
 ******************************************************************************/

/* Last change date: 2007-09-18 */



if(!window["OpenAjax"]){
	OpenAjax = {};
}
OpenAjax.Registry = { 
	/* Empty as of now. We are still in the launch phase. No entries have been approved yet. */
}



/*******************************************************************************
 Until we actually have some entries in the Registry, here is a snippet
 from the wiki page that shows how we expect Registry entries to look.

OpenAjax.Registry = { 
  OpenAjax: { 
    namespaceURI:"http://openajax.org/hub", 
    version:"1.0",
    globals:["OpenAjax"],
    specificationURI:"http://www.openajax.org/member/wiki/OpenAjax_Hub_Specification",
	extraData:null
  },
  abcLibrary: {...similar...},
  xyzLibrary: {...similar...}
}

 ******************************************************************************/
