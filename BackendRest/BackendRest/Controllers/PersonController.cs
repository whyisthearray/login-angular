using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendRest.Models;
using BackendRest.Models.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendRest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
		private readonly ApplicationContext db = new ApplicationContext();

		[HttpPost("login")]
		public ActionResult<HttpResponse> Login([FromBody] Person person)
		{
			return null;
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] Person person)
		{
		}

		[HttpGet("{id}")]
		public ActionResult<Person> Get(int id)
		{
			return null;
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] Person person)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}