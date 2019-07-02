using BackendRest.Models;
using BackendRest.Models.Context;
using System.Collections.Generic;

namespace BackendRest.DB
{
	public static class DBHelper
	{
		public static void Populate(ApplicationContext dbContext)
		{
			dbContext.Persons = new List<Person>
			{
				new Person(),
				new Person()
			};
		}
	}
}
