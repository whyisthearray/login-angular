using BackendRest.DB;
using System.Collections.Generic;

namespace BackendRest.Models.Context
{
	public class ApplicationContext
	{
		public ApplicationContext()
		{
			DBHelper.Populate(this);
		}

		public List<Person> Persons { get; set; }
	}
}
