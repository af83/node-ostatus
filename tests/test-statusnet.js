var assert=require('assert');
var fs=require('fs');
var path=require('path');
var ostatus=require('ostatus');

/*
 * Test interoperability with a Status.net signed salmon magic enveloppe.
 */

function test(){
	assert.ok(ostatus.salmon.verify_signature(me, key));
}

var me = {
		sigs: [
		        { value: 'UqKwh0XSOhdSD7U9nVHxB67sCNt8lQzkl5aPELQTfuhrlBoktbExhhkP4QGFg0WS0FgPnQpG24z5S4XIk2BTjI8My-VlwRWdeU72NtnLhZjz8EzA1aJTI_Drs71-YICuM_dLAJgo55pF4nIMkRN9KA-rS-y7oC3cwt01MknR8UQ=' }
		      ],
		data: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8-PGVudHJ5IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDA1L0F0b20iIHhtbG5zOnRocj0iaHR0cDovL3B1cmwub3JnL3N5bmRpY2F0aW9uL3RocmVhZC8xLjAiIHhtbG5zOmFjdGl2aXR5PSJodHRwOi8vYWN0aXZpdHlzdHJlYS5tcy9zcGVjLzEuMC8iIHhtbG5zOmdlb3Jzcz0iaHR0cDovL3d3dy5nZW9yc3Mub3JnL2dlb3JzcyIgeG1sbnM6b3N0YXR1cz0iaHR0cDovL29zdGF0dXMub3JnL3NjaGVtYS8xLjAiIHhtbG5zOnBvY289Imh0dHA6Ly9wb3J0YWJsZWNvbnRhY3RzLm5ldC9zcGVjLzEuMCIgeG1sbnM6bWVkaWE9Imh0dHA6Ly9wdXJsLm9yZy9zeW5kaWNhdGlvbi9hdG9tbWVkaWEiIHhtbG5zOnN0YXR1c25ldD0iaHR0cDovL3N0YXR1cy5uZXQvc2NoZW1hL2FwaS8xLyI-CiA8YWN0aXZpdHk6b2JqZWN0LXR5cGU-aHR0cDovL2FjdGl2aXR5c3RyZWEubXMvc2NoZW1hLzEuMC9ub3RlPC9hY3Rpdml0eTpvYmplY3QtdHlwZT4KIDxpZD5odHRwOi8vaWRlbnRpLmNhL25vdGljZS82NTEzOTc5MjwvaWQ-CiA8dGl0bGU-dGhpcyBvbmUgaXMgZm9yIEBjYXBhQGVzY2hlbmF1ZXIuYmUgLSBlbmpveSAhPC90aXRsZT4KIDxjb250ZW50IHR5cGU9Imh0bWwiPnRoaXMgb25lIGlzIGZvciBAJmx0O3NwYW4gY2xhc3M9JnF1b3Q7dmNhcmQmcXVvdDsmZ3Q7Jmx0O2EgaHJlZj0mcXVvdDtodHRwOi8vZXNjaGVuYXVlci5iZS91c2Vycy9jYXBhJnF1b3Q7IGNsYXNzPSZxdW90O3VybCZxdW90OyZndDsmbHQ7c3BhbiBjbGFzcz0mcXVvdDtmbiBuaWNrbmFtZSZxdW90OyZndDtjYXBhQGVzY2hlbmF1ZXIuYmUmbHQ7L3NwYW4mZ3Q7Jmx0Oy9hJmd0OyZsdDsvc3BhbiZndDsgLSBlbmpveSAhPC9jb250ZW50PgogPGxpbmsgcmVsPSJhbHRlcm5hdGUiIHR5cGU9InRleHQvaHRtbCIgaHJlZj0iaHR0cDovL2lkZW50aS5jYS9ub3RpY2UvNjUxMzk3OTIiLz4KIDxhY3Rpdml0eTp2ZXJiPmh0dHA6Ly9hY3Rpdml0eXN0cmVhLm1zL3NjaGVtYS8xLjAvcG9zdDwvYWN0aXZpdHk6dmVyYj4KIDxwdWJsaXNoZWQ-MjAxMS0wMi0yMlQyMToyMjo0OSswMDowMDwvcHVibGlzaGVkPgogPHVwZGF0ZWQ-MjAxMS0wMi0yMlQyMToyMjo0OSswMDowMDwvdXBkYXRlZD4KIDxhdXRob3I-CiAgPGFjdGl2aXR5Om9iamVjdC10eXBlPmh0dHA6Ly9hY3Rpdml0eXN0cmVhLm1zL3NjaGVtYS8xLjAvcGVyc29uPC9hY3Rpdml0eTpvYmplY3QtdHlwZT4KICA8dXJpPmh0dHA6Ly9pZGVudGkuY2EvdXNlci8zODUyMTY8L3VyaT4KICA8bmFtZT5zaG91dHI8L25hbWU-CiAgPGxpbmsgcmVsPSJhbHRlcm5hdGUiIHR5cGU9InRleHQvaHRtbCIgaHJlZj0iaHR0cDovL2lkZW50aS5jYS9zaG91dHIiLz4KICA8bGluayByZWw9ImF2YXRhciIgdHlwZT0iaW1hZ2UvcG5nIiBtZWRpYTp3aWR0aD0iOTYiIG1lZGlhOmhlaWdodD0iOTYiIGhyZWY9Imh0dHA6Ly90aGVtZS5pZGVudGkuY2EvMC45LjdiZXRhMi9pZGVudGljYS9kZWZhdWx0LWF2YXRhci1wcm9maWxlLnBuZyIvPgogIDxsaW5rIHJlbD0iYXZhdGFyIiB0eXBlPSJpbWFnZS9wbmciIG1lZGlhOndpZHRoPSI0OCIgbWVkaWE6aGVpZ2h0PSI0OCIgaHJlZj0iaHR0cDovL3RoZW1lLmlkZW50aS5jYS8wLjkuN2JldGEyL2lkZW50aWNhL2RlZmF1bHQtYXZhdGFyLXN0cmVhbS5wbmciLz4KICA8bGluayByZWw9ImF2YXRhciIgdHlwZT0iaW1hZ2UvcG5nIiBtZWRpYTp3aWR0aD0iMjQiIG1lZGlhOmhlaWdodD0iMjQiIGhyZWY9Imh0dHA6Ly90aGVtZS5pZGVudGkuY2EvMC45LjdiZXRhMi9pZGVudGljYS9kZWZhdWx0LWF2YXRhci1taW5pLnBuZyIvPgogIDxwb2NvOnByZWZlcnJlZFVzZXJuYW1lPnNob3V0cjwvcG9jbzpwcmVmZXJyZWRVc2VybmFtZT4KICA8cG9jbzpkaXNwbGF5TmFtZT5TaG91dHI8L3BvY286ZGlzcGxheU5hbWU-CiAgPHBvY286dXJscz4KICAgPHBvY286dHlwZT5ob21lcGFnZTwvcG9jbzp0eXBlPgogICA8cG9jbzp2YWx1ZT5odHRwOi8vc2hvdXRyLm9yZzwvcG9jbzp2YWx1ZT4KICAgPHBvY286cHJpbWFyeT50cnVlPC9wb2NvOnByaW1hcnk-CjwvcG9jbzp1cmxzPgo8L2F1dGhvcj4KIDwhLS1EZXByZWNhdGlvbiB3YXJuaW5nOiBhY3Rpdml0eTphY3RvciBpcyBwcmVzZW50IG9ubHkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCB2ZXJzaW9uIG9mIFN0YXR1c05ldC4tLT4KIDxhY3Rpdml0eTphY3Rvcj4KICA8YWN0aXZpdHk6b2JqZWN0LXR5cGU-aHR0cDovL2FjdGl2aXR5c3RyZWEubXMvc2NoZW1hLzEuMC9wZXJzb248L2FjdGl2aXR5Om9iamVjdC10eXBlPgogIDxpZD5odHRwOi8vaWRlbnRpLmNhL3VzZXIvMzg1MjE2PC9pZD4KICA8dGl0bGU-U2hvdXRyPC90aXRsZT4KICA8bGluayByZWw9ImFsdGVybmF0ZSIgdHlwZT0idGV4dC9odG1sIiBocmVmPSJodHRwOi8vaWRlbnRpLmNhL3Nob3V0ciIvPgogIDxsaW5rIHJlbD0iYXZhdGFyIiB0eXBlPSJpbWFnZS9wbmciIG1lZGlhOndpZHRoPSI5NiIgbWVkaWE6aGVpZ2h0PSI5NiIgaHJlZj0iaHR0cDovL3RoZW1lLmlkZW50aS5jYS8wLjkuN2JldGEyL2lkZW50aWNhL2RlZmF1bHQtYXZhdGFyLXByb2ZpbGUucG5nIi8-CiAgPGxpbmsgcmVsPSJhdmF0YXIiIHR5cGU9ImltYWdlL3BuZyIgbWVkaWE6d2lkdGg9IjQ4IiBtZWRpYTpoZWlnaHQ9IjQ4IiBocmVmPSJodHRwOi8vdGhlbWUuaWRlbnRpLmNhLzAuOS43YmV0YTIvaWRlbnRpY2EvZGVmYXVsdC1hdmF0YXItc3RyZWFtLnBuZyIvPgogIDxsaW5rIHJlbD0iYXZhdGFyIiB0eXBlPSJpbWFnZS9wbmciIG1lZGlhOndpZHRoPSIyNCIgbWVkaWE6aGVpZ2h0PSIyNCIgaHJlZj0iaHR0cDovL3RoZW1lLmlkZW50aS5jYS8wLjkuN2JldGEyL2lkZW50aWNhL2RlZmF1bHQtYXZhdGFyLW1pbmkucG5nIi8-CiAgPHBvY286cHJlZmVycmVkVXNlcm5hbWU-c2hvdXRyPC9wb2NvOnByZWZlcnJlZFVzZXJuYW1lPgogIDxwb2NvOmRpc3BsYXlOYW1lPlNob3V0cjwvcG9jbzpkaXNwbGF5TmFtZT4KICA8cG9jbzp1cmxzPgogICA8cG9jbzp0eXBlPmhvbWVwYWdlPC9wb2NvOnR5cGU-CiAgIDxwb2NvOnZhbHVlPmh0dHA6Ly9zaG91dHIub3JnPC9wb2NvOnZhbHVlPgogICA8cG9jbzpwcmltYXJ5PnRydWU8L3BvY286cHJpbWFyeT4KPC9wb2NvOnVybHM-CjwvYWN0aXZpdHk6YWN0b3I-CiA8bGluayByZWw9Im9zdGF0dXM6Y29udmVyc2F0aW9uIiBocmVmPSJodHRwOi8vaWRlbnRpLmNhL2NvbnZlcnNhdGlvbi82NDM4Mjk1NSIvPgogPGxpbmsgcmVsPSJvc3RhdHVzOmF0dGVudGlvbiIgaHJlZj0iaHR0cDovL2VzY2hlbmF1ZXIuYmUvdXNlcnMvY2FwYSIvPgogPGxpbmsgcmVsPSJtZW50aW9uZWQiIGhyZWY9Imh0dHA6Ly9lc2NoZW5hdWVyLmJlL3VzZXJzL2NhcGEiLz4KIDxnZW9yc3M6cG9pbnQ-NTAuNTY2NjcgNS41ODMzMzwvZ2VvcnNzOnBvaW50PgogPHNvdXJjZT4KICA8aWQ-aHR0cDovL2VzY2hlbmF1ZXIuYmUvdXBkYXRlcy9jYXBhLmF0b208L2lkPgogIDx0aXRsZT5jYXBhPC90aXRsZT4KICA8bGluayByZWw9ImFsdGVybmF0ZSIgdHlwZT0idGV4dC9odG1sIiBocmVmPSJodHRwOi8vZXNjaGVuYXVlci5iZS91c2Vycy9jYXBhIi8-CiAgPGxpbmsgcmVsPSJzZWxmIiB0eXBlPSJhcHBsaWNhdGlvbi9hdG9tK3htbCIgaHJlZj0iaHR0cDovL2VzY2hlbmF1ZXIuYmUvdXBkYXRlcy9jYXBhLmF0b20iLz4KICA8aWNvbj5odHRwOi8vdGhlbWUuaWRlbnRpLmNhLzAuOS43YmV0YTIvaWRlbnRpY2EvZGVmYXVsdC1hdmF0YXItcHJvZmlsZS5wbmc8L2ljb24-Cjwvc291cmNlPgogPGxpbmsgcmVsPSJzZWxmIiB0eXBlPSJhcHBsaWNhdGlvbi9hdG9tK3htbCIgaHJlZj0iaHR0cDovL2lkZW50aS5jYS9hcGkvc3RhdHVzZXMvc2hvdy82NTEzOTc5Mi5hdG9tIi8-CiA8bGluayByZWw9ImVkaXQiIHR5cGU9ImFwcGxpY2F0aW9uL2F0b20reG1sIiBocmVmPSJodHRwOi8vaWRlbnRpLmNhL2FwaS9zdGF0dXNlcy9zaG93LzY1MTM5NzkyLmF0b20iLz4KIDxzdGF0dXNuZXQ6bm90aWNlX2luZm8gbG9jYWxfaWQ9IjY1MTM5NzkyIiBzb3VyY2U9IndlYiI-PC9zdGF0dXNuZXQ6bm90aWNlX2luZm8-CjwvZW50cnk-Cg==',
	    data_type: 'application/atom xml',
	    encoding: 'base64url',
	    alg: 'RSA-SHA256'
};

var key = "RSA.xwUIPhP_nabY5OJ8Ka5T8n8lLnvvUb0DOzd08IniSVwt0AdIJsFmzGKOb6tVfF_IgaNWpWjyx_ek3aHV-U6AgkYcTxoLLaNkUrnHDQWfi6l2s3L9zhSCF9xlRIfWOkuaUARdNwteCWXS5rL82I8Bi1Z6zQ3ULI-OCsk7bRhl65M=.AQAB";


test();
